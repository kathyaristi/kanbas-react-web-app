function HomeIndex(selected="Home"){
    const links = []
    document.write(`
    <table width = "100%">
    <tbody>
        <tr>
            <td valign="top"><button>Collapse All</button>
                <button>View Progress</button>
                <select>
                    <option>Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules Only</option>
                    <option>Unpublish All</option>
        
                </select>
                
                <button>Module</button>
        
        
                <ul>
                    <li> Week 0 - INTRO
                      <ul>
                        <li>LEARNING OBJECTIVES </li>
                            <ul>
                                <li>Introduction to the course</li>
                                <li>Learn what is Web Development</li>
                                <li>Creating a development environment</li>
                                <li>Creating a Web Application</li>
                                <li>Getting started with the 1st assignment</li>
                            </ul>
                        <li>READING</li>
                        
                            <ul>
                                <li>Full Stack Developer CH1</li>
                                <li>Full Stack Developer CH2</li>

                            </ul>
                        
                        <li>SLIDES</li>
                        
                            <ul>
                                <li><a href="/Kanbas/Courses/Home/index.html">
                                    Introduction to Web Dev links</a></li>
                                    <li><a href="/Kanbas/Courses/Home/index.html">
                                        Creating an HTTP server with Node.js Links</a></li>
                                    <li><a href="/Kanbas/Courses/Home/index.html">
                                     Creating a React Application Links</a></li>
                            </ul>
                        
                      </ul>
                    </li>
                    <li> Week 2
                      <ul>
                        <li>LEARNING OBJECTIVES</li>
                        <ul>
                            <li>
                                Learn how to create user interfaces with
                            </li>
                            <li>
                               Keep working on assignment 1
                            </li>
                            <li>
                               Deploy the assignment to Netlify
                            </li>
                        </ul>
                        <li>READING</li>
                            <ul>
                                <li>Full Stack Developer CH1</li>
                                <li>Full Stack Developer CH2</li>

                            </ul>
                        
                      </ul>
                    </li>
                  </ul></td>
            <td valign="top">  <h2>Course Status</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button>Unpublish</button>
                                <button>Publish</button>
            
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul>
                                    <li><a href="/Kanbas/Courses/Home/index.html">
                                        Import Existing Content</a></li>
                                   <li><a href="/Kanbas/Courses/Home/index.html">
                                    Import Existing Commons</a></li>
                                   <li><a href="/Kanbas/Courses/Home/index.html">
                                    Choose Home Page</a></li>
                                <li><a href="/Kanbas/Courses/Home/index.html">
                                    View Course Stream</a></li>
                                <li><a href="/Kanbas/Courses/Home/index.html">
                                    New Announcement</a></li>
                                    <li><a href="/Kanbas/Courses/Home/index.html">
                                        New Analytics</a></li>
                                        <li><a href="/Kanbas/Courses/Home/index.html">
                                            View Course Notification</a></li>
                               </ul>
            
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h2>Coming Up</h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/Kanbas/Courses/Home/index.html">
                                    View Calendar</a>

                                    <ul>
                                        <li><a href="/Kanbas/Courses/Home/index.html">
                                            Lecture CS4550.12631 11:45am</a></li>
                                       <li><a href="/Kanbas/Courses/Home/index.html">
                                        Lecture CS4550.12631 1:35pm</a></li>
                                       <li><a href="/Kanbas/Courses/Home/index.html">
                                        Lecture CS4550.12631 6pm</a></li></ul>
                            </td>
                        </tr>

                    </tbody>
         </table>

            </td>
        </tr>
    </tbody>
</table>
    `)
}