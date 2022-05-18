import React from "react";
import {
  NativeBaseProvider,
  Box,
  Avatar,
  Actionsheet,
  Button,
  useDisclose,
  Text,
  HStack,
  Stack,
  AspectRatio,
  Heading,
  Center,
} from "native-base";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  View,
} from "react-native";

export default function ListOffersScreen() {
  const { isOpen, onOpen, onClose } = useDisclose();
  let deviceHeight = Dimensions.get("window").height;
  let deviceWidth = Dimensions.get("window").width;
  return (
    <NativeBaseProvider>
      <Box alignItems="center" safeArea>
        <Box
          width={deviceWidth * 0.95}
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <View
              style={{
                shadowColor: "#000B33",
                shadowOffset: {
                  width: 0,
                  height: 20,
                },
                shadowOpacity: 0.3,
                shadowRadius: 2,
                height: 50,
                width: 50,
              }}
            >
              <Image
                style={{
                  height: 40,
                  width: 40,
                  bg: "white",
                  margin: 40,
                }}
                resizeMode="cover"
                source={{
                  uri: "https://res.cloudinary.com/dtst9qaue/image/upload/v1652266053/x9g1iapcd7zprkzwex5t.png",
                }}
              />
            </View>

            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              SARL FACEBOOK
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                Infographiste Web & Print
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                CDD - 1 mois - 15,90€/h brut
              </Text>
            </Stack>
            <Text fontWeight="400">Peu de détail</Text>
            {/* carte qui s'ouvre pour faire apparaître l'annonce détaillée */}

            <Button
              onPress={onOpen}
              shadow={2}
              backgroundColor="#000050"
              width={90}
            >
              Consulter
            </Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <Box alignItems="center">
                  <Box
                    maxW="80"
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700",
                    }}
                    _web={{
                      shadow: 2,
                      borderWidth: 0,
                    }}
                    _light={{
                      backgroundColor: "gray.50",
                    }}
                  >
                    <Box>
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                      <Center
                        bg="violet.500"
                        _dark={{
                          bg: "violet.400",
                        }}
                        _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs",
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                      >
                        SARL FACEBOOK
                      </Center>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          Infographiste Web & Print
                        </Heading>
                        <Text
                          fontSize="xs"
                          _light={{
                            color: "violet.500",
                          }}
                          _dark={{
                            color: "violet.400",
                          }}
                          fontWeight="500"
                          ml="-0.5"
                          mt="-1"
                        >
                          CDD - 1 mois - 15,90€/h brut
                        </Text>
                      </Stack>
                      <Text fontWeight="400">
                        Le texte est un descriptif de l'annonce. Des détails que
                        l'employeur aura saisi lui même et que le demandeur
                        d'emploi pourra consulter ici.
                      </Text>

                      <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="space-between"
                      >
                        <HStack alignItems="center">
                          <Text
                            color="coolGray.600"
                            _dark={{
                              color: "warmGray.200",
                            }}
                            fontWeight="400"
                          >
                            Posté il y a 2 jours
                          </Text>
                        </HStack>
                        <Button shadow={2} backgroundColor="#000050">
                          Je postule !
                        </Button>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>
              </Actionsheet.Content>
            </Actionsheet>

            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  Posté il y a 2 jours
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
          backgroundColor: "red",
        }}
      ></View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
