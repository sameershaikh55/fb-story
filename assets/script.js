const sidebar = document.getElementById("sideBarId");
document.getElementById("hambergerBtn").addEventListener("click", () => {
	sidebar.style.display = "block";
	sidebar.style.opacity = "1";
	sidebar.style.top = "0%";
	sidebar.style.left = "0%";
	sidebar.style.transform = "none";
});

const closeSidebar = () => {
	sidebar.style.display = "none";
	sidebar.style.opacity = "0";
	sidebar.style.transition = "1s all";
};

