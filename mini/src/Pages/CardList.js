// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Card, Row, Col} from 'react-bootstrap' 
// import styled from "styled-components";
// import {useSelector, useDispatch} from "react-redux";
// // import { changeTitle } from "./redux/modules/card";
// // import {changeTitle} from "./redux/modules/cardSlice";


// const CardBox = (props) => {

//     const card = useSelector(state => state.card);

//     console.log(card[0].title);

//     const dispatch = useDispatch();

//     return(
//         <>
//         <CardList>
//                 {card.map((list,index) => {
//                     return(
//                     <Card key={card.id}>
//                         <Img variant="top" src={card[index].img} />
//                         <Body>
//                             <Title>
//                                 {card[index].title}
//                             </Title>
//                             <Text>
//                                 {card[index].comment}
//                             </Text>
//                                 {card[index].star}
//                             </Body>
//                     </Card>
//                         )
                        
//                     })}  
                    
//         </CardList>
//         </>        
//     )
// }

// const CardList = styled.div`
//     display: center;
//     flex-direction: row;
//     width:80%;
//     margin:20px auto;
// `
// const Card = styled.div`

// `
// const Img = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 224px;
//   overflow: hidden;
//   margin: 0 auto;
// `

// const Body = styled.div`

// `
// const Title = styled.div`

// `
// const Text = styled.div`

// ` 

// export default CardBox;