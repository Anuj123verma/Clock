setInterval(()=>{
    let d = new Date();
    time.innerHTML = d.toDateString() + " " + d.toTimeString();
  },1000)