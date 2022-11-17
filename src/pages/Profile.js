
import React from 'react'




export default function Profile() {


    return (
        <div class="card">
            <h5 class="card-header my-5">Featured</h5>
            <div class="card-body">
            <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>ARDA</td>
                                <td>Demir</td>
                                <td>ardademir@gmail.com</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )



}
