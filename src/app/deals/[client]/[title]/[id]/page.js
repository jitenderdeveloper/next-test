import View_Pro from "@/app/components/view_product/View_Pro";

export async function getData(params) {
  const id = params?.id;
  const res = await fetch(`https://api.cashdost.com/api/product/${id}`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      product: data?.product_data || {},
    },
  };
}

async function page({ params }) {
  return (
    <>
      <View_Pro params={params} />
    </>
  );
}

export default page;

export async function generateMetadata({ params }) {
  const getParamsData = await getData(params);
  const { title, description } = getParamsData || {};
  const titles = title?.split("-")?.join(" ");
  return {
    title: titles,
    description: description,
  };
}
