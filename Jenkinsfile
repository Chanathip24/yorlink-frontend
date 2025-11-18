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
                withCredentials([
                    string(credentialsId: 'VITE_API_BASE_URL', variable: 'VITE_API_BASE_URL'),
                    string(credentialsId: 'VITE_FRONTEND_URL', variable: 'VITE_FRONTEND_URL')
                ]) {
                    sh """
                        echo "Building Docker image securely..."
                        docker build \
                        --build-arg VITE_YORLINK_API_BASE_URL=${VITE_API_BASE_URL} \
                        --build-arg VITE_YORLINK_FRONTEND_URL=${VITE_FRONTEND_URL} \
                        -t ${REGISTRY}/${IMAGE_NAME}:latest .
                    """
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-cred', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh """
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push ${REGISTRY}/${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Deploy to MicroK8s') {
            steps {
                sh "microk8s kubectl apply -f k8s/frontend-deployment.yaml"
            }
        }

        stage('Verify Deployment') {
            steps {
                sh "microk8s kubectl get pods && microk8s kubectl get svc"
            }
        }
    }

    post {
        always {
            sh "docker image prune -f"
        }
    }
}
