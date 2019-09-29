<Flex px={2} color="white" bg="black" alignItems="center">
  <Text p={2} fontWeight="bold">
    Rebass
  </Text>
  <Box mx="auto" />
  <Link to="#!" p={2} color="white">
    Profile
  </Link>
</Flex>
<Row
  width="100%"
  height="60px"
  alignItems="center"
  filter="drop-shadow(0px 3px 10px rgba(221,221,221,1))"
  padding="15px"
>
  <Block flex="1" fontSize="14px">
    <Heading fontFamily={"sans"}>
      Tucson Community Meditation Center
    </Heading>
  </Block>
  <Row>
    <NavLink to="/retreats">Retreats</NavLink>
    <NavLink to="/retreats">Classes</NavLink>
    <NavLink to="/retreats">Teachers</NavLink>
    <NavLink to="/retreats">About</NavLink>
    <NavLink to="/retreats">Donate</NavLink>
  </Row>
</Row>
<Row alignItems="center" padding={15}>
  <Block
    backgroundColor="#EEE"
    boxShadow="inset 0 0 0 1px rgba(0,0,0,0.15)"
    borderRadius={5}
    height={64}
    width={64}
    marginRight={15}
    backgroundSize="contain"
    backgroundImage="url(http://graph.facebook.com/justinbieber/picture?type=large)"
  />
  <Col fontFamily="sans-serif" fontSize={16} lineHeight="24px">
    <Block fontWeight={600}>Justin Bieber</Block>
    <Block fontStyle="italic">Canadian</Block>
  </Col>
</Row>
