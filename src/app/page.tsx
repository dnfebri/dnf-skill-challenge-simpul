import DefaultComponentNext from "@/components/DefaultComponentNext";
import Layout from "@/components/Layout";
import Quicks from "@/components/Quicks";
import { WidgetQuicks } from "@/components/widget/WidgetQuicks";

export default function Home() {
  return (
    <Layout>
      <DefaultComponentNext />
      <WidgetQuicks />
      <Quicks />
    </Layout>
  );
}
