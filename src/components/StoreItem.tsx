import { Button, Card, CardBody } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContext";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <CardBody className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)} </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
              Add To cart
            </Button>
          ) : (
            <div
              className="d-flex align-item-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-item-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
              </div>
              <div className="d-flex align-item-center justify-content-center">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
