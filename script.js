const plus = document.getElementById('plus-guest');
const minus = document.getElementById('minus-guest');
const guest = document.getElementById('guest-count');
const input_guest = document.getElementById('guest');

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
const toastLiveExample2 = document.getElementById('liveToast2');

const guestShow = document.getElementById('guest_show');
const locationShow = document.getElementById('location_show');
const searchBtn = document.getElementById('searchbtn');

let count = document.getElementById("guest").value;
guest.innerHTML = count;

searchBtn.addEventListener('click', () => {
    guestShow.innerHTML = document.getElementById("guest").value
    locationShow.innerHTML = document.getElementById("location").value +", Finland"
});

plus.addEventListener('click', () => {
    let count = document.getElementById("guest").value;
    count++;
    guest.innerHTML = count;
    if (count > 10) {
        count = 10;
        guest.innerHTML = count;

        var toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
        setTimeout(function() {
            toast.hide();
          }, 2000);
    }
    document.getElementById("guest").value = count;
});

minus.addEventListener('click', () => {
    let count = document.getElementById("guest").value;
    count--;
    guest.innerHTML = count;
    if (count < 1) {
        count = 1;
        guest.innerHTML = count;

        var toast2 = new bootstrap.Toast(toastLiveExample2);
        toast2.show();
        setTimeout(function() {
            toast2.hide();
          }, 2000);
    }
    document.getElementById("guest").value = count;
});

function count_guest() {
    var x = document.getElementById('guest').value;

    guest.innerHTML = x;
    if (x > 10) {
        x = 10;
        guest.innerHTML = x;
        document.getElementById('guest').value = 10;
    }
    if (x < 0) {
        x = 0;
        guest.innerHTML = x;
        document.getElementById('guest').value = 0;
    }
    if (x.startsWith("0")) {
        return false;
    }
}