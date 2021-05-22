import { BrowserRouter, Route } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SellerRoute from "./components/SellerRoute";
import SellerScreen from "./screens/SellerScreen";
import SearchScreen from "./screens/SearchScreen";
import MapScreen from "./screens/MapScreen";
import HomeH from "./mainComponents/Home";
import Navbar from "./screens/Navbar";
import ChatRoom from "./socialComponents/ChatRoom";
import Software from "./softwareComponents/Software";
import Truck from "./truckComponents/Truck";
import Career from "./careerComponets/Career";
import Footer from "./screens/Footer";
// import Chat from "./socialComponents/chatComponents/chat/Chat";
import Join from "./socialComponents/chatComponents/Join/Join";
import NavbarH from "./screens/NavbarH";
import Report from "./truckComponents/Report";
import History from "./truckComponents/History";
import Pending from "./truckComponents/Pending";
import TrackPaid from "./truckComponents/TrackPaid";

// import ChatRoom from "./socialComponents/ChatRoom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main style={{ minHeight: "320px" }}>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          {/* <Route path="/chat" component={Chat}></Route> */}
          <Route path="/join" component={Join}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>
          <Route path="/" component={HomeH} exact></Route>
          <Route path="/home" component={HomeScreen} exact></Route>
          <Route path="/chat" component={ChatRoom} exact></Route>{" "}
          <Route path="/software" component={Software} exact></Route>{" "}
          <Route path="/truck" component={Truck} exact></Route>{" "}
          <Route path="/career" component={Career} exact></Route>
          <Route path="/navbarh" component={NavbarH} exact></Route>
          <Route path="/t-report" component={Report} exact></Route>
          <Route path="/t-history" component={History} exact></Route>
          <Route path="/t-pending" component={Pending} exact></Route>
          <Route path="/t-paid" component={TrackPaid} exact></Route>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
