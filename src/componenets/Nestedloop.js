import React from 'react';
import  { Table } from 'react-bootstrap';

const data = [
    {name: 'Uziar',email:'uziar1kk2019@gmail.com',Add:[{Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'}]},
    {name: 'Saad',email:'saad1kk2019@gmail.com',Add:[{Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'}]},
    {name: 'Ijaz',email:'Ijaz1kk2019@gmail.com',Add:[{Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'}]},
    {name: 'Inam',email:'Inam1kk2019@gmail.com',Add:[{Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'}]},
    {name: 'Wajid',email:'Wajid1kk2019@gmail.com',Add:[{Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'}]},
    {name: 'Suliman',email:'Suliman1kk2019@gmail.com',Add:[{Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'},
    {Country : 'Pakistan',city:'Charsadda',vc:'Nisatta'}]},
]

function NestedLoop(){

    return(
   
        <div className="container">
        <h1>Hello</h1>
        
        <Table variant = 'dark' striped >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
               {
                data.map((element,i)=>
                    // console.log('Map function',element.name,element.email,element.Add);
                        <tr key= {i}>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{
                                 <Table variant = 'dark' striped>
                                 <thead>
                                     <tr>
                                         <th>Country</th>
                                         <th>City</th>
                                         <th>VC</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                 {
                                  element.Add.map((address,id)=>

                                    <tr key = {id}>
                                        <td>{address.Country}</td>
                                        <td>{address.city}</td>
                                        <td>{address.vc}</td>
                                       
                                    </tr> )
                                 }

                         </tbody>
                        </Table>
                          
                }
                </td>
               </tr>
             ) 
               }
               
            </tbody>

        </Table>
         </div>
 
    )
}
export default NestedLoop;