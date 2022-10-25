import StoryCard from "./StoryCard";

// const stories = [
//   {
//     name: "Toluwalope Adeoye",
//     src2: "https://i.pinimg.com/564x/95/8f/13/958f13df14214830e8acb6c214545e1d.jpg",
//     profile:
//       "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4247929851895340&height=50&width=50&ext=1626263029&hash=AeR-ob0xMHz3H5tcGZg",
//   },
//   {
//     name: "Sonny Sangha",
//     src2: "https://links.papareact.com/zof",
//     profile: "https://links.papareact.com/l4v",
//   },
//   {
//     name: "Jeff Bezoz",
//     src2: "https://links.papareact.com/k2j",
//     profile: "https://links.papareact.com/f0p",
//   },
//   {
//     name: "Mark Zuckerberg",
//     src2: "https://links.papareact.com/xql",
//     profile: "https://links.papareact.com/snf",
//   },
//   {
//     name: "Bill Gates",
//     src2: "https://links.papareact.com/4u4",
//     profile: "https://links.papareact.com/zvy",
//   },
// ];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src2}
          name={story.name}
          source={story.src2}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;