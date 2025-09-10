
function CategoryList({finalCategory, setCategory}) {

  // props drilling - passing function as props and getting value from child to parent
  let cat = finalCategory.map((v,i) => {
    return(
        <li onClick={()=> setCategory(v)} key={i} className="bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2">{v}</li>
    )
  }) 

  return (
    <div>
          <h3 className="text-[25px] font-[500] p-[10px]">Product Category</h3>

          <ul>
              {cat}
               
          </ul>
    </div>
  )
}

export default CategoryList