import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from"axios"


const Home = () => {
    const checkoutHandler= async(amount)=>{

        const { data: { key } } = await axios.get("https://razorpaypaymentgateway-tdnb.onrender.com/api/getkey")

        const {data:{order}}= await axios.post("https://razorpaypaymentgateway-tdnb.onrender.com/api/checkout",{
         amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Vinita Yarda",
            description: " RazorPay",
            image: "https://media.licdn.com/dms/image/D5603AQFozKcD0DY7Mg/profile-displayphoto-shrink_800_800/0/1668676265567?e=2147483647&v=beta&t=IkKM-rFIiLWEDOCuSiYd5y2RbBSQ0pmufKEbyY4mpRo",
            order_id: order.id,
            callback_url: "https://razorpaypaymentgateway-tdnb.onrender.com/api/paymentverification",
            prefill: {
                name: "Vinita Yarda",
                email: "Vinita.Yarda@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#8080C0"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    
    }

   

    
  return (
    <Box>
        <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column","row"]}>
        <Card amount={60000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler}/>
        <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
        <Card amount={70000} img={"https://assets.sangeethamobiles.com/product_img/6944/1663133831_9ie.jpg"} checkoutHandler={checkoutHandler} />
        <Card amount={4000} img={"https://static.arzooo.com/images/products/0339c/c088c/01b39a5f2b3c152a70a085aaedf75a139051cb95ee2655cf264538_00.jpg"} checkoutHandler={checkoutHandler} />
        <Card amount={6000} img={"https://static.arzooo.com/images/products/21377/21e20/46b883a1c83773188dfaa4182b4deabeb4c151621093ba92c95f67_00.jpg"} checkoutHandler={checkoutHandler} />
        <Card amount={100000} img={"https://d2xamzlzrdbdbn.cloudfront.net/products/cba3931e-2326-43e2-88ce-296d45a6632e22081150_182x182.jpg"} checkoutHandler={checkoutHandler} />

        </Stack>
        
    </Box>

  )
}

export default Home