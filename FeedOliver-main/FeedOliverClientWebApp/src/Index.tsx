import "./base.css";
import { SoftKeys, TopNavBar, IconButton } from "./components/navbar";
import PetCard from "./components/petCard";
import styles from "./Index.module.css";

function AppBody() {
  //
  const owner = { name: "John Doe" };
  // Meant to mimic SQL query for getting all the animals for the given owner
  const animals: Array<Record<any, any>> = [
    { id: 0, name: "Loki", breed: "Golden Retriever", type: "dog" },
    { id: 1, name: "Bobby", breed: "Netherland Dwarf", type: "dog" },
    { id: 2, name: "Fluffly", breed: "Persian Cat", type: "cat" },
    { id: 3, name: "Pussy", breed: "Bengal", type: "cat" },
  ];

  return (
    <main
      style={{ marginTop: "80px", paddingBottom: "80px", paddingTop: "20px" }}
    >
      <h1 className={styles.welcome}>Welcome {owner.name}</h1>
      {animals.map((animal) => {
        return (
          <PetCard
            id={animal.id}
            name={animal.name}
            breed={animal.breed}
            type={animal.type}
          />
        );
      })}
    </main>
  );
}

function Index() {
  const openNotifications = () => {
    alert("hey");
  };

  return (
    <>
      <TopNavBar>
        <div>
          <IconButton
            style={{ width: "70px", height: "70px" }}
            href="/index"
            src="FeedOliver.png"
          />
        </div>
        <div>
          <IconButton onClick={openNotifications} src="Bell.svg" />
        </div>
      </TopNavBar>

      <AppBody />

      <SoftKeys selected={window.location.pathname} />
    </>
  );
}

export default Index;
