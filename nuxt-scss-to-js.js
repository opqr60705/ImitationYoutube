var option = {
  "namespace": "scss",
  "theme": {},
  "options": {
    "path": "~/assets/scss/variables.scss",
    "namespace": "scss",
    "generate": false,
    "inject": true
  }
}

export default async function ({ router, store }, inject) {
    inject(option.namespace,  option.theme );
}