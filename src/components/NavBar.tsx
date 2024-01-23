
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

export default function NavBar() {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-medium">Logo</h1>
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Products..."
            />
            <BsSearch className="absolute top-0 right-0 size=[20px] mt-4 mr-5 text-gray-500" />
          </div>
          <div className="flex gap-4">
            <div className="icon_wrapper">
              <AiOutlineUser />
            </div>
            <div className="icon_wrapper relative">
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
