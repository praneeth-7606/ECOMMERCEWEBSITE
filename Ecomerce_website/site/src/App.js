// import logo from './logo.svg';

import Login from './components/login';
import Myhome from './components/myhome';
import Signup from './components/signup';
import { Route ,Routes} from 'react-router-dom';
import Homepage from './components/homepage';
import Aboutus from './components/aboutus';
import Contactus from './components/contactus';
import Pagenotfound from './components/pagenotfound';
import Mypolices from './components/mypolices';
import Cart from './components/cart';
import Dashboard from './components/user/dashboard';
import PrivateRoute from './components/routes/private';
import AdminRoute from './components/routes/admin_priv';
import Forgot from './components/forgot';
import Admindashboard from './components/admin/admindashboard';
import CreateCategory from './components/admin/createcategory';
import CreateProduct from './components/admin/createproduct';
import Profile from './components/user/profile';
import Orders from './components/user/orders';
import Users from './components/admin/users';
import Products from './components/admin/products';
import Search1 from './components/search1';
import UpdateProduct from './components/admin/updateproduct';
import Categoryproduct from './components/categoryproducts';
import ProductDetails from './components/productdetails';
import Categories from './components/categories';
import CartPage from './components/user/carpage1.js';
import AdminOrders from './components/admin/adminorders.js';
// import categorypr
function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Homepage/>}  />
      <Route path="/forgot"  element={<Forgot/>}  />
      <Route path="/category/:slug" element={<Categoryproduct />} />
        <Route path="/search" element={<Search1 />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage/>} />
        {/* <Route path="/search" element={<Search />} /> */}
      <Route path="/about"  element={<Aboutus/>} />
      <Route path="/contact"  element={<Contactus/>} />
      <Route path="*"   element={<Pagenotfound/>}/>
      <Route path="/pl"   element={<Mypolices/>}/>
      <Route path="/login"   element={<Login/>}/>
      <Route path="/signup"   element={<Signup/>}/>
      <Route path="/cart"   element={<Cart/>}/>
      <Route path="/dashboard" element={<PrivateRoute/>}>
      <Route path="user"   element={<Dashboard/>}  />
      <Route path="user/profile"   element={<Profile/>}  />
      <Route path="user/orders"   element={<Orders/>}  />
      </Route>
      <Route path="/dashboard" element={<AdminRoute/>}>
      <Route path="admin"   element={<Admindashboard/>}  />
      <Route path="admin/createcategory"   element={<CreateCategory/>}  />
      <Route path="admin/createproduct"   element={<CreateProduct/>}  />
      <Route path="admin/product/:slug" element={<UpdateProduct />} />
      <Route path="admin/products"   element={<Products/>}  />
      <Route path="admin/users"   element={<Users/>}  />
      <Route path="admin/orders"   element={<AdminOrders />}  />
      {/* <Route path="admin/users"   element={<Users/>}  /> */}
      </Route>
    </Routes>
    
    </>
  );
}

export default App;
