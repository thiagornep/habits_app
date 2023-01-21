const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  walk: ["01-01","01-02","01-03","01-04","01-05"],
  water : [],
  cook : [],
  pet : [],
  gyn : [],
  byke : []
}

nlwSetup.setData(data)
nlwSetup.load()