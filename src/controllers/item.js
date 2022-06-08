const Item=require('../models/Item')

const getItems=async(req,res)=>{
  try {
      const items= await Item.find()
      res.status(200).send(items)
  } catch (error) {
    res.send(error);
  }
}
const addItem=async(req,res)=>{
try {
    const item= await Item.create(req.body)
    res.status(201).send(item)
} catch (error) {
    res.send(error)
}
}

const editItem=async(req,res)=>{
try {
    await Item.findByIdAndUpdate(req.params.id, {...req.body})
    res.status(200).send("item updated")
} catch (error) {
  res.send(error);
}
}

const removeItem=async(req,res)=>{
try {
      await Item.findByIdAndDelete({_id:req.params.id})
      res.status(200).send("item deleted")
} catch (error) {
  res.send(error);
}
}


module.exports={addItem , editItem , removeItem , getItems}