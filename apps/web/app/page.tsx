"use client";

import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  const userRoles = [
    {
      title: "District Admin",
      description: "Manage district-wide IEP programs and policies",
      route: "/district",
      color: "primary" as const,
    },
    {
      title: "School Admin",
      description: "Oversee school-level IEP implementation",
      route: "/admin",
      color: "secondary" as const,
    },
    {
      title: "Teacher",
      description: "Access teacher dashboard and student IEPs",
      route: "/teacher",
      color: "success" as const,
    },
    {
      title: "Parent",
      description: "View and participate in your child's IEP",
      route: "/parent",
      color: "info" as const,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100dvh",
        py: 4,
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          mb: 2,
          textAlign: "center",
        }}
      >
        IEPFlow
      </Typography>

      <Typography
        variant="h5"
        component="p"
        sx={{
          mb: 4,
          textAlign: "center",
          color: "text.secondary",
          maxWidth: "600px",
        }}
      >
        Choose your role to access the appropriate dashboard
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
          },
          gap: 3,
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {userRoles.map((role) => (
          <Card
            key={role.route}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 4,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                {role.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {role.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                href={role.route}
                passHref
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color={role.color}
                  fullWidth
                  size="large"
                >
                  Access {role.title}
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
