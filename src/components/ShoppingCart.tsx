import { Offcanvas, OffcanvasHeader, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItems } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import StoreItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart(props: ShoppingCartProps) {
  const { closeCart, cartItem } = useShoppingCart();

  return (
    <Offcanvas show={props.isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map((item) => (
            <CartItems key={item.id} {...item}></CartItems>
          ))}
          <div className="ms-auto fw-bold fs-2">
            Total{" "}
            {formatCurrency(
              cartItem.reduce((total, cartItem) => {
                const item = StoreItems.find((item) => item.id == cartItem.id);

                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
