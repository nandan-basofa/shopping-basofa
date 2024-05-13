import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItems({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const item = StoreItems.find((item) => item.id == id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
      <img
        src={item.imgUrl}
        style={{ width: "150px", height: "75px", objectFit: "cover" }}
      ></img>
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 0 && <span className="text-muted"> x{quantity}</span>}
        </div>
        <div className="text-muted">{formatCurrency(item.price)}</div>
      </div>
      <div className="me-auto fs-4">
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          removeFromCart(id);
        }}
      >
        x
      </Button>
    </Stack>
  );
}
