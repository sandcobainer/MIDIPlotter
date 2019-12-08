from osc import OSCMessage, OSCBundle, OSCClient, OSCServer

message = OSCMessage(address='/message/address')

# argument can be string, int, float, bool and binary
message.add( 'Some text argument' )
message.add( 3 )
message.add( 0.75 )
message.add( True )

# create osc bundle and add a message
bundle = OSCBundle()
bundle.add( message )

# create client and send to 127.0.0.1:8000
client = OSCClient('127.0.0.1', 8000)
client.send( message )
client.send( bundle )

# bind server and listen for incoming messages at 127.0.0.1:8000
server = OSCServer('127.0.0.1', 8000)
server.serve_forever()