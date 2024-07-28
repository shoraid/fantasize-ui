import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            veniam repellendus neque nihil reiciendis assumenda. Delectus, dicta
            consequatur maiores iusto eveniet soluta ducimus! Delectus tempora
            laborum ipsam aspernatur iusto architecto.
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </div>
  );
}
