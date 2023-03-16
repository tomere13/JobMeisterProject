import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import {} from './main'
import {} from './favorites'

const firebaseConfig = {
  apiKey: 'AIzaSyDoC94Xlt0BHfsH_zLp8562xsKMW49mv8s',
  authDomain: 'job-meister.firebaseapp.com',
  projectId: 'job-meister',
  storageBucket: 'job-meister.appspot.com',
  messagingSenderId: '51579629977',
  appId: '1:51579629977:web:eae8590655f4e102e2e308',
  measurementId: 'G-W33GWTB6JB',
}

// init firebase
const app = initializeApp(firebaseConfig)

// init services
const db = getFirestore(app)
const auth = getAuth()
let logEmail
let allUsers = [],
  allSavedAds = []
let usernumber, useremail, userfirstname, userlastname
let flag = 0
let darkflag = 0
let textflag = 0
let adCount = 0
// onAuthStateChanged(auth,(user)=>{
//   console.log("User status changed",user);

//   if(user==null) {
//     location.href="404.html"
//   }
// })

const adColRef = collection(db, 'Ads')
const docAllusers = collection(db, 'users')
getDocs(docAllusers).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    allUsers.push({ ...doc.data(), id: doc.id })
  })
  let userq = allUsers.length
  console.log(allUsers)
  for (let index = 0; index < userq; index++) {
    if (allUsers[index].email == logEmail) {
      useremail = allUsers[index].email
      userfirstname = allUsers[index].firstname
      userlastname = allUsers[index].lastname
    }
  }
  document.querySelector('#welcometext').innerHTML =
    "<p id=welcometext class='text-black text-center'>שלום  " +
    userfirstname +
    ', הנה המשרות ששמרת באתרנו</p>'
})

onAuthStateChanged(auth, (user) => {
  console.log('User status changed', user)
  if (user != null) {
    logEmail = user.email
  } else {
    location.href = 'index.html'
  }
})

const logoutButton = document.querySelector('.logoutBtn')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      alert('signout')
      location.href = 'index.html'
    })
    .catch((err) => {
      console.log(err.message)
    })
})

var adSize
getDocs(adColRef)
  .then((snapshot) => {
    let Ads = []
    snapshot.docs.forEach((doc) => {
      Ads.push({ ...doc.data(), id: doc.id })
    })
    adSize = Ads.length
    console.log(Ads)
    const docAllSaved = collection(db, 'SavedAds')
    getDocs(docAllSaved).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        allSavedAds.push({ ...doc.data(), id: doc.id })
      })
      let SaveAdsQ = allSavedAds.length
      for (let index = 0; index < adSize; index++) {
        for (let i = 0; i < SaveAdsQ; i++) {
          if (
            Ads[index].accepted == true &&
            Ads[index].id == allSavedAds[i].idOfAds &&
            allSavedAds[i].Saveremail == logEmail
          ) {
            document.querySelector('#adC').innerHTML = ++adCount
            $('#try1').append(
              "<div class='Added col-md-4'> <div class='card mb-4 box-shadow'><img class='card-img-top' src='/img/occpics/occ" +
                Ads[index].imgid +
                ".jpeg' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' data-holder-rendered='true'><div class='card-body'> <h5 id='cardHeader' dir='rtl'><b>" +
                Ads[index].title +
                "</b></h5> <p class='card-text' id='cardText' dir='rtl'>" +
                Ads[index].des +
                "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button id='view" +
                index +
                "' class='btn btn-sm btn-outline-secondary' data-bs-toggle='modal' data-bs-target='#modalF'>צפה</button></div><small class='text-muted'>" +
                Ads[index].Date +
                '</small></div></div></div></div>'
            )
          }
        }
      }
      for (let index = 0; index < adSize; index++) {
        const buttonE2 = document.getElementById('view' + index)
        if (buttonE2) {
          buttonE2.addEventListener('click', function () {
            document.querySelector('#WStitle').innerHTML = Ads[index].title
            if (Ads[index].company == null) {
              document.querySelector('#WScompany').innerHTML = 'חסוי'
            } else {
              document.querySelector('#WScompany').innerHTML =
                Ads[index].company
            }
            document.querySelector('#WSlocation').innerHTML =
              Ads[index].location
            document.querySelector('#WSdescribe').innerHTML = Ads[index].des
            document.querySelector('#WSreq').innerHTML = Ads[index].req
            document.querySelector('#WSdep').innerHTML = Ads[index].dep
            document.querySelector('#WSpercent').innerHTML = Ads[index].percent
            document.querySelector('#WSimg').src =
              '/img/occpics/occ' + Ads[index].imgid + '.jpeg'
          })
        }
      }
    })
  })

  .catch((err) => {
    console.log(err.message)
  })

$('#darkBtn').click(function () {
  if (darkflag === 0) {
    $('#body').addClass('darkMode')
    $('#body').removeClass('bg-gray-200')
    $('#divDark').addClass('text-white')
    $('#adminDark').addClass('text-white')

    darkflag = 1
  } else {
    $('#body').addClass('bg-gray-200')
    $('#body').removeClass('darkMode')
    $('#divDark').removeClass('text-white')
    $('#adminDark').removeClass('text-white')
    darkflag = 0
  }
})

$('#largeFont').click(function () {
  if (textflag === 0) {
    $('p').addClass('largeFont')
    $('h1').addClass('largerH')
    $('body').addClass('largeFont')
    $('.navG').addClass('mediumFont')

    textflag = 1
  } else {
    $('p').removeClass('largeFont')
    $('h1').removeClass('largerH')
    $('body').removeClass('largeFont')
    $('.navG').removeClass('mediumFont')

    textflag = 0
  }
})

$('#acessability').click(function () {
  if (flag === 0) {
    $('#acessability').addClass('widthAccess')
    flag = 1
  } else {
    $('#acessability').removeClass('widthAccess')
    flag = 0
  }

  $('#accessMenu').toggle('drop')
  return false
})
// notifc menu
$(document).ready(function () {
  var down = false

  $('#bell').click(function (e) {
    var color = $(this).text()
    if (down) {
      $('#box').css('height', '0px')
      $('#box').css('opacity', '0')
      down = false
    } else {
      $('#box').css('height', 'auto')
      $('#box').css('opacity', '1')
      down = true
    }
  })
})
