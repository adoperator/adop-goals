import Cookies from "js-cookie";

var reg = /clickid=([^&=]+)/.exec(window.location.search);
// reg = [1, 2];
if (reg) {
  Cookies.set("ADOPCID", reg[1]);
}
window.AdopEvent = function (campaignId, name, value = null, count = null) {
  var clickid = Cookies.get("ADOPCID");
  if (!clickid) {
    return false;
  }
  var img = document.createElement("img");
  //   img.style.width = "170px";
  //   img.style.height = "170px";
  //   img.style.backgroundColor = "green";
  img.style.width = "1px";
  img.style.height = "1px";
  img.style.display = "none";
  var query = `campaign_id=${campaignId}&name=${name}&clickid=${clickid}`;
  if (value) query += `&value=${value}`;
  if (count) query += `&count=${count}`;
  img.src = `https://newService?${query}`;

  document.body.append(img);
};
