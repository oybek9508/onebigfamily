import { Box, Button } from "@mui/material";
import React from "react";

const DownloadButton = ({ navColor, title }) => {
	const handleDownload = () => {
		const downloadLink = document.createElement("a");
		downloadLink.href = "/catalog.pdf"; // Path to the PDF file in the public folder
		downloadLink.download = "catalog.pdf"; // Name for the downloaded file
		downloadLink.click();
	};

	return (
		<Box sx={{ ml: "50px", display: { xs: "none", md: "block" } }}>
			<Button
				sx={{
					color: navColor,
					fontFamily: "PT_Serif",
					textTransform: "capitalize",
					fontWeight: 300,
					padding: "10px 20px",
					fontSize: "16px",
					backgroundColor: "inherit",
					border: "1px solid #ccc",
					borderRadius: "5px",
					cursor: "pointer",
					transition: "background-color 0.3s ease",
				}}
				onClick={handleDownload}
			>
				{title}
			</Button>
		</Box>
	);
};

export default DownloadButton;
