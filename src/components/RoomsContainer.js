import React from 'react';
import RoomFilter from './RoomsFilter'
import RoomList from './RoomsList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    if(loading) {
        return <Loading />;  } 
            return (
             <>
                 <RoomFilter rooms={rooms} />
                 <RoomList rooms={sortedRooms}/>
             </> 
            );
}


export default withRoomConsumer(RoomContainer)








// import React from 'react';
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList';
// import {RoomsConsumer} from '../context';
// import Loading from './Loading';


// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value;
//                    if(loading) {
//                        return <Loading />;
//                    } 
//                     return (
//                         <div>
//                         hey from bla
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
       
//     )
// }

// export default RoomContainer;