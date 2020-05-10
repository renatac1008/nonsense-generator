//create function to pick up sample
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateNonsense(occupation) {

  //Define occupation task and phrase
  const occupations = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!occupation) return '請選擇職業'

  //judge occupation
  let nonsense = ''
  for (let thing in task) {
    if (thing === occupation) {
      nonsense = `身為一個${occupations[thing]}，${sample(task[thing])}${sample(phrase)}吧！`
    }
  }
  //return the result
  return nonsense
}

module.exports = generateNonsense

