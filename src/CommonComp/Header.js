import "./Header.css"
export default function Header()
{
    return(
       <>       
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top navbarHeader">
            <div class="row m-0 backgrounGifyImage d-flex justify-content-between w-100" > 
            <a class="navbar-brand " href="#">
            <span class="ml-3 font-weight-bold">Tourist.</span>
            </a> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">
            <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbar4">
                <ul class="navbar-nav ml-auto pl-lg-4">
                {/* <li class="nav-item px-lg-2 dropdown d-menu">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="d-inline-block d-lg-none icon-width"><i class="far fa-caret-square-down"></i></span>Dropdown
                <svg  id="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                </a>
                <div class="dropdown-menu shadow-sm sm-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
                </li> */}
                 <li class="nav-item px-lg-2"> <a class="nav-link" href="#"><span class="d-inline-block d-lg-none icon-width"><i class="far fa-envelope"></i></span>Food</a> </li>
                <li class="nav-item px-lg-2"> <a class="nav-link" href="#"><span class="d-inline-block d-lg-none icon-width"><i class="far fa-envelope"></i></span>Camping</a> </li>
                <li class="nav-item px-lg-2"> <a class="nav-link" href="#"><span class="d-inline-block d-lg-none icon-width"><i class="far fa-envelope"></i></span>Spa</a> </li>
                <li class="nav-item px-lg-2"> <a class="nav-link" href="#"><span class="d-inline-block d-lg-none icon-width"><i class="far fa-envelope"></i></span>About</a> </li>
                <li class="nav-item px-lg-2"> <a class="nav-link" href="#"><span class="d-inline-block d-lg-none icon-width"><i class="far fa-envelope"></i></span>Contact</a> </li>
            </ul>
                {/* <ul class="navbar-nav ml-auto mt-3 mt-lg-0">
                <li class="nav-item"> <a class="nav-link" href="#">
                <i class="fab fa-twitter"></i><span class="d-lg-none ml-3">Twitter</span>
                </a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">
                <i class="fab fa-facebook"></i><span class="d-lg-none ml-3">Facebook</span>
                </a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">
                <i class="fab fa-instagram"></i><span class="d-lg-none ml-3">Instagram</span>
                </a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">
                <i class="fab fa-linkedin"></i><span class="d-lg-none ml-3">Linkedin</span>
                </a> </li>
                </ul> */}
            </div>
            </div>
        </nav>
       </>
    )
}