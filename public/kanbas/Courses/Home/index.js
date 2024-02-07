function HomeIndex(selected="Home"){
    const links = []
    document.write(`
    <table width = "100%">
    <tbody>
        <tr>
            <td valign="top">
            <button>Collapse All</button>
            <button>View Progress</button>
            <select>
                <option>Publish All</option>
                <option>Publish All Modules and Items</option>
                <option>Publish Modules Only</option>
                <option>Unpublish All</option>
    
            </select>
            
            <button>+ Module</button>
    
    
            <ul class="list-group wd-modules">
                <li class="list-group-item"> 
                  <div>
                    <i class="fa fa-ellipsis-v"></i> Week 1
                    <span class="float-end">
                      <i class="fa fa-check-circle text-success"></i>
                      <i class="fa fa-plus ms-2"></i>
                      <i class="fa fa-ellipsis-v ms-2"></i>
                    </span>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i> Learning Objectives
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                  
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i>  <space></space> Introduction to Course
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i>    Learn what is Web Development
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i> Creating a development environment
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i> Creating a Web Application
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i> Getting started with the 1st assignment
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
               <ul class="list-group wd-modules">
                <li class="list-group-item"> 
                  <div>
                    <i class="fa fa-ellipsis-v"></i> Week 2
                    <span class="float-end">
                      <i class="fa fa-check-circle text-success"></i>
                      <i class="fa fa-plus ms-2"></i>
                      <i class="fa fa-ellipsis-v ms-2"></i>
                    </span>
                  </div>
          
                  <ul class="list-group">
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i> Learning Objectives
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
    
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i>  <space></space> Learn how to create user interfaces with
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i>    Keep working on assignment 1
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <i class="fa fa-ellipsis-v"></i> Keep working on assignment 1
                      <span class="float-end">
                        <i class="fa fa-check-circle text-success"></i>
                        <i class="fa fa-ellipsis-v ms-2"></i>
                      </span>
                    </li>
                  </ul>
                </li>
                
                </li>
              </ul>
           </td>
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