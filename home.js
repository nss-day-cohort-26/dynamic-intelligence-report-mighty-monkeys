const homeFrag = document.createDocumentFragment()

const wrap = document.getElementById('wrapper')
const sect  = document.createElement('section')
sect.id = "Home"
const img = document.createElement("img")
img.src = "jailpic.jpg"
img.style.width = '1100px'
img.style.height = '800px'
const sects = document.getElementById("wrapper")

sect.appendChild(img)
const box = document.createElement('ul')
const sack = document.createElement('ul')
const pack = document.createElement('ul')

const names = ['Bill Myes', 'Jack Bird', 'Steve Gill'] 

const head = document.createElement('h2')
head.textContent= 'Associates'
box.appendChild(head)

for (let i = 0; i < names.length; i++) {
  const li = document.createElement('li')
  const namesText = names[i]
  li.textContent=namesText
  box.appendChild(li)
}

sect.appendChild(box)

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

sect.appendChild(sack)

const hometown = ['Nashville, TN']

const headerThree = document.createElement('h2')
headerThree.textContent= 'Hometown'
pack.appendChild(headerThree)

for (let i = 0; i < hometown.length; i++) {
  const li = document.createElement('li')
  const hometownText = hometown[i]
  li.textContent = hometownText
  pack.appendChild(li)
}

sect.appendChild(pack)
homeFrag.appendChild(sect)
wrap.appendChild(homeFrag)

