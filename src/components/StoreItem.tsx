import { Button, Card, CardBody } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  let quantity = 1;
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
            <Button className="w-100">Add To cart</Button>
          ) : (
            <>
              <div className="d-flex align-items-center flex-column">
                <Button>+</Button>
                <Button>-</Button>
              </div>{" "}
              <div className="d-flex align-items-center justify-content-center">
                Hi
              </div>{" "}
            </>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
