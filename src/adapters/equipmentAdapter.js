class EquipmentAdapter {
  static addEquipment(equipment) {
    let equipmentForm = this.appendForm(equipment);

    return fetch('http://localhost:4200/api/v1/equipment',{
      method: 'post',
      body: equipmentForm
    }).then(res => res.json())
  }

  static appendForm(equipment) {
    let equipmentForm = new FormData();

    for(let name in equipment) {
      if (name === 'images') {
        equipment[name].forEach(image => equipmentForm.append('images[]', image))
      } else {
        equipmentForm.append(name, equipment[name]);
      }
    }

    return equipmentForm;
  }
}

export default EquipmentAdapter
