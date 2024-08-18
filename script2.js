var h = document.getElementById("hash");

String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }
function MakeTheHash() {
    var hash = document.getElementById("hashing").value;
    h.textContent = hash.hashCode();
}
function TextScrape() {
  
}
