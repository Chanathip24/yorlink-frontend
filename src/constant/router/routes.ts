type IRoute = {
  path: string
  getUrl: (alias: string) => string
}

type IRoutes = {
  HOME: Omit<IRoute, 'getUrl'>
  ENTRY_POINT: IRoute
}

export const ROUTES: IRoutes = {
  HOME: {
    path: '/',
  },
  ENTRY_POINT: {
    path: '/shorten/:alias',
    getUrl: (alias: string) => `/shorten/${alias}`,
  },
}
