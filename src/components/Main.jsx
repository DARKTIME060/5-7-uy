
import Nike1 from "../images/nike1.png"
import Nike2 from "../images/nike2.png"
import Nike3 from "../images/nike3.png"
import Nike4 from "../images/nike4.png"
import Nike5 from "../images/nike5.png"

const data = [
    {
        id: 1,
        image: Nike2,
        title: "Nike Air Max 270",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    },
    {
        id: 2,
        image: Nike3,
        title: "Nike Tanjun",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    },
    {
        id: 3,
        image: Nike4,
        title: "Green Air Force",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    },
    {
        id: 4,
        image: Nike5,
        title: "Nike moon shoes",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    },
]


function Main() {
    return (
        <div>

            <main>
                <section className="product">
                    <div className="container">
                        <div className="product__left">
                            <img src={Nike1} alt="Nike React Infinity Run" className="product__left-image" />
                            <h2 className="product__left-title">Shoe Review: Nike React Infinity Run</h2>
                            <p className="product__left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa</p>
                        </div>
                        <div className="product__right">
                            {
                                data.map((item) => {
                                    return <div className="box" key={item.id}>

                                        <div className="product__right-box">
                                            <img src={item.image} className="product__right-image" />
                                            <h2 className="product__right-title">{item.title}</h2>
                                            <p className="product__right-text">{item.text}</p>
                                        </div>
                                    </div>

                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main