function Grades(selected="SelectedContent"){
    const links = []
    document.write(`  <table width="100%">
    <tbody>
        <tr>
            <td>
                <select>
                    <option>Gradebook</option>
                    <option>Change Gradebook View</option>
                    <option>Individual Gradebook</option>
                    <option></option> 

                </select>
                <button>Import</button>
                <select>
                    <option>Export</option>
                </select>
                <button>Configure</button> <br/>

                <label>Student Names</label> <br/>
                <input placeholder="search students"/><br/>
                <label>Assignment names</label> <br/>
                <input placeholder="search assignements"/> <br/>
                <button>Apply Filters</button>
            </td>
        </tr>
    </tbody>
</table>
<table border = "1" width ="100%">
    <thead>
        <tr >
            <th rowspan="2">Student Name</th>
            <th>A1 Setup</th>
            <th>A2 HTML</th>
            <th>A3 CSS</th>
            <th>A4</th>
            <th>A5</th>
            <th>A6</th>
            <th>A7</th>
            <th>A8</th>
            <th>A9</th>

        </tr>
        <tr>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
        </tr>

    </thead>
    <tbody >
        <tr>
        
            <td >Alice W</td>
            <td align="middle">100</td>
            <td align="middle">98</td>
            <td align="middle"> 89</td>
            <td align="middle">100</td>
          
            <td align="middle">100</td>
            <td align="middle">100</td>
            <td align="middle">100</td>
            <td align="middle">100</td>
            <td align="middle">100</td>

                
        </tr>
        <tr>
        <td>Snoopy</td>
            <td align="middle">98</td>
            <td align="middle">100</td>
            <td align="middle">100</td>
            <td align="middle">100</td>
            <td align="middle">100</td>
            <td align="middle">100</td>
            <td align="middle"> <input type = "number" value = 86></input></td>
            <td align="middle">100</td>
            <td align="middle">100</td>
        </tr>
        <tr>
            <td>Beyonce</td>
            <td align="middle"> <input type = "number" value = 99></input></td>

                <td align="middle">98</td>
                <td align="middle">100</td>
                <td align="middle">100</td>
                <td align="middle">100</td>
                <td align="middle">100</td>
                <td align="middle">100</td>
                <td align="middle">100</td>
                <td align="middle">100</td>
            </tr>

            <tr>
                <td>Ariana Grande</td>    
                    <td align="middle">98</td>
                    <td align="middle">100</td>
                    <td align="middle">100</td>
                    <td align="middle">100</td>
                    <td align="middle">100</td>
                    <td align="middle">100</td>
                    <td align="middle"> <input type = "number" value = 86></input></td>
                    <td align="middle">100</td>
                    <td align="middle">100</td>
                </tr>
                <tr>
                    <td>Rachel Green</td>    
                        <td align="middle">98</td>
                        <td align="middle"> <input type = "number" value = 92 align = "middle"></input></td>
                        <td align="middle">100</td>
                        <td align="middle">100</td>
                        <td align="middle">100</td>
                        <td align="middle">100</td>
                        <td align="middle">100</td>
                        <td align="middle">100</td>
                        <td align="middle">100</td>
                    </tr>
                    <tr>
                        <td>Ross Geller</td>    
                            <td align="middle">98</td>
                            <td align="middle"> 87</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                        </tr>
                        <tr>
        
                            <td >Alice Smith</td>
                            <td align="middle">100</td>
                            <td align="middle">98</td>
                            <td align="middle"> 89</td>
                            <td align="middle">100</td>
                          
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
        
                                
                        </tr>
                        <tr>
                        <td>Jennifer Coolidge</td>
                            <td align="middle">98</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                            <td align="middle"> <input type = "number" value = 86></input></td>
                            <td align="middle">100</td>
                            <td align="middle">100</td>
                        </tr>
                        <tr>
                            <td>Chase</td>
                            <td align="middle"> <input type = "number" value = 99></input></td>
        
                                <td align="middle">98</td>
                                <td align="middle">100</td>
                                <td align="middle">100</td>
                                <td align="middle">100</td>
                                <td align="middle">100</td>
                                <td align="middle">100</td>
                                <td align="middle">100</td>
                                <td align="middle">100</td>
                            </tr>
        
                            <tr>
                                <td>Jane Doe</td>    
                                    <td align="middle">98</td>
                                    <td align="middle">100</td>
                                    <td align="middle">100</td>
                                    <td align="middle">100</td>
                                    <td align="middle">100</td>
                                    <td align="middle">100</td>
                                    <td align="middle"> <input type = "number" value = 86></input></td>
                                    <td align="middle">100</td>
                                    <td align="middle">100</td>
                                </tr>
                                <tr>
                                    <td>Chandler Bing</td>    
                                        <td align="middle">98</td>
                                        <td align="middle"> <input type = "number" value = 92 align = "middle"></input></td>
                                        <td align="middle">100</td>
                                        <td align="middle">100</td>
                                        <td align="middle">100</td>
                                        <td align="middle">100</td>
                                        <td align="middle">100</td>
                                        <td align="middle">100</td>
                                        <td align="middle">100</td>
                                    </tr>
                                    <tr>
                                        <td>Monica Geller</td>    
                                            <td align="middle">98</td>
                                            <td align="middle"> 87</td>
                                            <td align="middle">100</td>
                                            <td align="middle">100</td>
                                            <td align="middle">100</td>
                                            <td align="middle">100</td>
                                            <td align="middle">100</td>
                                            <td align="middle">100</td>
                                            <td align="middle">100</td>
                                    </tr>
                    </tbody>
    </tbody>
</table>`)
}