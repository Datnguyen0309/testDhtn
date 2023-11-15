"use client";

import { FormMain } from "@/components/FormContact";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  Container,
  GridItem,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BranchNganh } from "@/components/Branch";

export const LayoutNganh = ({
  children,
  title,
  path,
  titleNganh
}: {
  children?: ReactNode;
  title?: string;
  path?: string;
  titleNganh?: string
}) => {
  return (
    <>
      <Box
        pos={"relative"} zIndex={0}
        bg={"blue.900"}
      >
        <Container
          maxW="7xl"
          py={"48px"}
          className={styles["context"]}
          pos={"absolute"}
          top={{ lg: "242px", base: "125px" }}
          left={"50%"}
          transform={"translateX(-50%)"}
        >
          <Heading
            as="h1"
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            {title}
          </Heading>
          <Breadcrumb color={"White "} fontWeight={"bold"} fontSize={"18px"}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={"/"}>Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={path} color={"white !important"}> {titleNganh}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        <Box className={styles["area"]} bg={"blue.900"} w={"100%"}>
          <List className={styles["circles"]}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </List>
        </Box>


      </Box>
      <Box color={"blue.900"} >
        <Box>
          <Container maxW={"7xl"} py="42px" >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"24px"}>
              <GridItem colSpan={{ base: 1, md: 2 }}>{children}</GridItem>
              <GridItem>
                <Box mt={{ base: "24px", lg: 0 }} boxShadow='0px 3px 20px rgba(0, 33, 71, 0.06)' p='6' bg='white'>
                  <Heading as={"h2"} size={{ base: "md" }} pb={"12px"}>
                    Đăng ký xét tuyển không cần thi
                  </Heading>
                  <Text fontSize={"sm"} pb={"12px"}>
                    Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Đi học được luôn.
                    Ưu tiên nộp hồ sơ sớm
                  </Text>
                  <FormMain />
                </Box>
                <BranchNganh

                  name=""
                  src=""
                  overview={[
                  ]}
                  jobs={[
                  ]}
                  program={{
                    credits: 124,
                    subjects: 42,
                    list: [
                      {
                        title: "Đã có bằng cao đẳng khác khối ngành",
                        content: "2,5 năm",
                      },
                      {
                        title: "Đã có bằng cao đẳng cùng khối ngành",
                        content: "2 năm",
                      },
                      {
                        title: "Đã có bằng Đại học cùng, khác khối ngành",
                        content: "2 năm",
                      },
                    ],
                  }}
                />

              </GridItem>

            </SimpleGrid>
          </Container>
        </Box>

      </Box>
    </>
  );
};

export const Layout = ({
  title,
  path,
  titleNganh
}: {
  children?: ReactNode;
  title?: string;
  path?: string;
  titleNganh?: string
}) => {
  return (
    <>
      <Box
        pos={"relative"} zIndex={0}
        bg={"blue.900"}
      >
        <Container
          maxW="7xl"
          py={"48px"}
          className={styles["context"]}
          pos={"absolute"}
          top={{ lg: "242px", base: "125px" }}
          left={"50%"}
          transform={"translateX(-50%)"}
        >
          <Heading
            as="h1"
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            {title}
          </Heading>
          <Breadcrumb color={"White "} fontWeight={"bold"} fontSize={"18px"}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={"/"}>Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={path} color={"white !important"}> {titleNganh}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        <Box className={styles["area"]} bg={"blue.900"} w={"100%"}>
          <List className={styles["circles"]}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </List>
        </Box>
      </Box>
    </>
  );
};

export const LayoutLkg = ({
  children,
  title,
  path,
  titleNganh
}: {
  children?: ReactNode;
  title?: string;
  path?: string;
  titleNganh?: string
}) => {
  return (
    <>
      <Box
        pos={"relative"} zIndex={0}
        bg={"blue.900"}
      >
        <Container
          maxW="7xl"
          py={"48px"}
          className={styles["context"]}
          pos={"absolute"}
          top={{ lg: "242px", base: "125px" }}
          left={"50%"}
          transform={"translateX(-50%)"}
        >
          <Heading
            as="h1"
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            {title}
          </Heading>
          <Breadcrumb color={"White "} fontWeight={"bold"} fontSize={"18px"}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={"/"}>Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={path} color={"white !important"}> {titleNganh}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        <Box className={styles["area"]} bg={"blue.900"} w={"100%"}>
          <List className={styles["circles"]}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </List>
        </Box>
      </Box>
      <Box color={"blue.900"} >
        <Box>
          <Container maxW={"7xl"} py="42px" >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"24px"}>
              <GridItem colSpan={{ base: 1, md: 2 }}>{children}</GridItem>
              <GridItem>
                <Box mt={{ base: "24px", lg: 0 }} boxShadow='0px 3px 20px rgba(0, 33, 71, 0.06)' p='6' bg='white'>
                  <Heading as={"h2"} size={{ base: "md" }} pb={"12px"}>
                    Đăng ký xét tuyển không cần thi
                  </Heading>
                  <Text fontSize={"sm"} pb={"12px"}>
                    Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Đi học được luôn.
                    Ưu tiên nộp hồ sơ sớm
                  </Text>
                  <FormMain />
                </Box>
              </GridItem>
            </SimpleGrid>
          </Container>
        </Box>

      </Box>
    </>
  );
};