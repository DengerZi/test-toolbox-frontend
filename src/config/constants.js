export const TOKEN_KEY = `toolbox_token`

function getServerHost() {
  const apiUrl = process.env.REACT_APP_API_URL
  const env = process.env.NODE_ENV
  if (apiUrl) {
    return apiUrl
  } else {
    return env === `production`
      ? `http://${window.location.host}`
      : `http://${window.location.hostname}:4000`
  }
}

//URL
export const SERVER_HOST = getServerHost()

export const API_BASE_URL = `${SERVER_HOST}/api/v1`
