import Cookies from 'js-cookie'

const clickid = /clickid=([^&=]+)/.exec(window.location.search)

if (clickid) {
  Cookies.set('ADOPCID', clickid[1], { expires: 365 })
}

window.AdopEvent = function (goalId, value = null, count = null) {
  const clickid = Cookies.get('ADOPCID')

  if (!clickid) {
    return false
  }

  const img = document.createElement('img')
  img.style.width = '1px'
  img.style.height = '1px'
  img.style.display = 'none'

  let query = `goal_id=${goalId}&clickid=${clickid}`

  if (value) query += `&value=${value}`
  if (count) query += `&count=${count}`

  img.src = `${window.location.protocol}//newService?${query}`

  document.body.appendChild(img)
}
