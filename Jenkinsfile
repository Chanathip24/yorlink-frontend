pipeline {
    agent any

    environment {
        REGISTRY = "docker.io/chanathipcha24"
        IMAGE_NAME = "yorlink-frontend"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Unique tag per build
                    IMAGE_TAG = "v${env.BUILD_NUMBER}"
                }
                withCredentials([
                    string(credentialsId: 'VITE_API_BASE_URL', variable: 'VITE_API_BASE_URL'),
                    string(credentialsId: 'VITE_FRONTEND_URL', variable: 'VITE_FRONTEND_URL')
                ]) {
                    sh """
                        echo "Building Docker image $IMAGE_TAG securely..."
                        docker build --no-cache \
                        --build-arg VITE_YORLINK_API_BASE_URL=$VITE_API_BASE_URL \
                        --build-arg VITE_YORLINK_FRONTEND_URL=$VITE_FRONTEND_URL \
                        -t $REGISTRY/$IMAGE_NAME:$IMAGE_TAG .
                    """
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-cred', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh """
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push $REGISTRY/$IMAGE_NAME:$IMAGE_TAG
                    """
                }
            }
        }

        stage('Deploy to MicroK8s') {
            steps {
                // Update deployment with new image tag
                sh """
                    microk8s kubectl set image deployment/frontend-deployment frontend=$REGISTRY/$IMAGE_NAME:$IMAGE_TAG
                    microk8s kubectl rollout status deployment/frontend-deployment
                """
            }
        }

        stage('Deploy Ingress') {
            steps {
                sh "microk8s kubectl apply -f k8s/frontend-ingress.yaml"
            }
        }

        stage('Verify Deployment') {
            steps {
                sh """
                    microk8s kubectl get pods
                    microk8s kubectl get svc
                """
            }
        }
    }

    post {
        always {
            echo "Cleaning up local Docker images..."
            sh "docker image prune -f"
        }
    }
}
