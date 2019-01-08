var drugkolist = {
  'abacavir': '/99999/fk45m7fn9t/v0.0.1',
  'allopurinol':'/99999/fk4058s74p/v0.0.1',
  'amitriptyline': '/99999/fk4t167482/v0.0.1',
  'atazanavir': '/99999/fk4d79nq4z/v0.0.5',
  'azathioprine':'/99999/fk4r225c4h/v0.0.1',
  'carbamazepine':'/99999/fk4mw3nw5p/v0.0.1',
  'citalopram': '/99999/fk4d22836k/v0.0.5',
  'clomipramine':'/99999/fk4w67pr0f/v0.0.1',
  'clopidogrel': '/99999/fk4bz6hp15/v0.0.5',
  'codeine': '/99999/fk4mc97w6m/v0.0.5',
  'desipramine':'/99999/fk4rf6zx6d/v0.0.1',
  'doxepin':'/99999/fk4sf40t7f/v0.0.1',
  'escitalopram': '/99999/fk4d22836l/v0.0.5',
  'fluvoxamine':'/99999/cp4mc9723sd/v0.0.1',
  'imipramine':'/99999/fk4d51vd1p/v0.0.1',
  'mercaptopurine':'/99999/fk4m91fj9z/v0.0.1',
  'nortriptyline':'/99999/fk44n0ds5c/v0.0.1',
  'ondansetron':'/99999/fk4c83hw23/v0.0.1',
  'oxcarbazepine':'/99999/fk4qc17m5z/v0.0.1',
  'paroxetine':'/99999/cp4mc9723se/v0.0.1',
  'phenytoin': '/99999/fk4qz3fz89/v0.0.1',
  'sertraline':'/99999/fk40k3kt35/v0.0.1',
  'simvastatin': '/99999/fk4m95ek9z/v0.0.1',
  'tacrolimus':'/99999/fk4t85em9x/v0.0.1',
  'thioguanine':'/99999/fk4cx5fm8f/v0.0.1',
  'trimipramine':'/99999/fk4jw9m41b/v0.0.1',
  'tropisetron':'/99999/fk4fn2d721/v0.0.1',
  'voriconazole':'/99999/fk4cz4fm8f/v0.0.1'
}

function druglist (inputs) {
  var list = {}
  var isEmpty = true
  for (var key in inputs) {
    if (inputs[key]!=null) {
      isEmpty = isEmpty && false
    }
  }
  if (isEmpty) {
    return drugkolist
  } else {

    for (var key in inputs) {
      list[key] = drugkolist[key]
    }
    return list
  }
}