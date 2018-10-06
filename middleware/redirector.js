export default function ({ redirect, route }) {
  if (route.path == '/user/2') redirect('/')
}
