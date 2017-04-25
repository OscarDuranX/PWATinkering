var version = 'v1::'

var offlineFundamentals = [
  '',
  '/',
  '/css/all-landing.css',
  '/js/app-landing.js'
];

var offLinePage = '<html><head><title>Opps we are offline!</title></head><body>Opps you are offline</body></html>'


self.addEventListener('install',function(event) {
  console.log('Installing...')

  event.waitUntil(
    caches.open(version + 'fundamentals').then(function (cache) {
      return cache.addAll(offlineFundamentals);
    }).catch(function () {
      console.log('opppsss')
    })
  )
})

self.addEventListener('activate',function(event) {
  console.log('Activated service worker')
})

self.addEventListener('fetch',function(event) {
  console.log('fetch service')
  console.log(event.request.url)
  const  url = new URL(event.request.url)
  console.log('fetch service worker')

  if(event.request.url === 'http://localhost:8081/img/arrow1.png') {
    console.log('Prova!')
    return
  }
})