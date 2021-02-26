import List from './List';
export default function Products() {
  const ourProducts = [
        {
            "articleNo": "pc-0001",
            "name": "Dell PC 2021",
            "description": "super-fast and not-so-reliable machine that takes care of your daily doses of crashes",
            "price": 899.99
        },
        {
            "articleNo": "hw-0002",
            "name": "Lenovo ThinkPad",
            "description": "high-end-business notebook for the power-user who does not need a working computer at all",
            "price": 1295.95
        },
        {
            "articleNo": "hw-0003",
            "name": "MacBook Pro",
            "description": "beautifully designed, pricey aluminum block. comes with an apple sticker for your car!",
            "price": 3299.95
        },
        {
            "articleNo": "hw-0004",
            "name": "HP Spectre Convertible",
            "description": "extremely performant notebook that converts to a bulky tablet for users with strong arms and huge hands",
            "price": 1800
        }
    ]
    return (
        <div class="list-group">
            { ourProducts.map((product, index)=> (
              <List
              key = {index}
              product = { product } />
              
            ) )}
          
        </div>
    )
}