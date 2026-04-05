import { Box, Typography, TextField, Button } from "@mui/material";

export default function Security() {
  return (
    <Box className="max-w-sm mx-auto mt-16 p-8 bg-[#111827] border border-gray-800 rounded-xl shadow-2xl">
      <Typography
        variant="h6"
        className="text-accent font-bold mb-10 text-center"
      >
        Security
      </Typography>

      <div className="space-y-8">
        <TextField
          label="Current Password"
          type="password"
          variant="standard"
          fullWidth
          sx={{
            input: { color: "white", fontSize: "1.1rem" },
            label: { color: "#9ca3af" },
            "& .MuiInput-underline:before": { borderBottomColor: "#374151" },
          }}
        />
        <TextField
          label="New Password"
          type="password"
          variant="standard"
          fullWidth
          sx={{
            input: { color: "white", fontSize: "1.1rem" },
            label: { color: "#9ca3af" },
            "& .MuiInput-underline:before": { borderBottomColor: "#374151" },
          }}
        />
        <div className="pt-6">
          <Button
            variant="contained"
            fullWidth
            className="bg-primary hover:opacity-90 h-12 capitalize font-semibold text-lg rounded-lg"
          >
             Update Password
          </Button>
        </div>
      </div>
    </Box>
  );
}
