const homeFrag = document.createDocumentFragment()
const wrap = document.getElementById('wrapper')
const sect  = document.createElement('section')
sect.id = "Home"
const header = document.createElement('h1')
header.id = 'head'
header.textContent = 'Mighty Monkeys'
sect.appendChild(header)
const img = document.createElement("img")
img.src = "jailpic.jpg"
img.style.width = '1000px'
img.style.heght = '1100px'
img.style.borderRadius = '10%'
const sects = document.getElementById("wrapper")


sect.appendChild(img)
const parentDiv = document.createElement('div')
const box = document.createElement('ul')
const sack = document.createElement('ul')
const pack = document.createElement('ul')
parentDiv.appendChild(box)
parentDiv.appendChild(sack)
parentDiv.appendChild(pack)
console.log(parentDiv)
parentDiv.id ="tripod"

const names = ['Bill Myes', 'Jack Bird', 'Steve Gill'] 

names.id='bit'
const head = document.createElement('h2')
head.textContent= 'Associates'
box.appendChild(head)

for (let i = 0; i < names.length; i++) {
  const li = document.createElement('li')
  const namesText = names[i]
  li.textContent=namesText
  box.appendChild(li)
}

// sect.appendChild(box)

const aliases = ['Joe Black', 'Mickey', 'Lee Jones'] 

const headerTwo = document.createElement('h2')
headerTwo.textContent= 'Aliases'
sack.appendChild(headerTwo)

for (let i = 0; i < aliases.length; i++) {
  const li = document.createElement('li')
  const aliasesText = aliases[i]
  li.textContent = aliasesText
  sack.appendChild(li)
}

// sect.appendChild(sack)

const hometown = ['Nashville, TN','Somewhere Else', 'Nowhere Else']

const headerThree = document.createElement('h2')
headerThree.textContent= 'Hometown'
pack.appendChild(headerThree)

for (let i = 0; i < hometown.length; i++) {
  const li = document.createElement('li')
  const hometownText = hometown[i]
  li.textContent = hometownText
  pack.appendChild(li)
}

homeFrag.appendChild(sect)
wrap.appendChild(homeFrag)
sect.appendChild(parentDiv)

