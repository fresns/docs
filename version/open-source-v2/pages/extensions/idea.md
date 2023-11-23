# Product Idea

## Server

The design concept of Fresns product structure comes from the formula “**Algorithms + Data Structures = Programs**”. Based on the software idea of this formula, we divide Fresns into the product structure as shown in the following figure.

![Fresns Structure](https://files.fresns.org/wiki/images/idea.png)

Users’ interaction behavior produces results on the content, and the results can be archived by some sort of form; the algorithm outputs the archived results under specific conditions, and finally the client product parses and renders the interface for users to browse and interact again.

All this is attributed to data, so users, interactions, content, and categories have their own primary keys, and then they are extended and attached. The core focus is to define the data structure and API interface, and other functional modules can be delivered to the extension plug-in. Therefore, our plug-in mechanism is embedded in the process of data transfer, which also guarantees the real-time, unified, universal and standard integrated use across platforms.

The design of the main program is like a scaffold and a framework, which lays a solid and reliable foundation for the extension program. It only contains the basic API functions that are indispensable to the community, and the rest of the extension functions are provided by plug-ins; as an independent functional module, the plug-in adopts “[Command Word](https://pm.fresns.org/command-word/)” as the communication mode from the perspective of system design and business encapsulation, that is, a plug-in module includes multiple command words, and the functions of the plug-in are externally called by command word. For developers, the form is concise and easy to develop; as far as system communication is concerned, the plug-in communication mode is concise, and it can be called by similar RPC mode. In light of the subsequent framework extension of such design idea, the monolithic framework can support multiple plug-ins as well as multiple systems and multiple plug-ins in the future. Besides, distributed calls can be implemented across systems in the micro-service mode.


## Client

The user’s perception of a product’s function (sense of space) does not depend on the URL, but primarily at the UE and UI levels (breadcrumb navigation).

The user’s perception of a product’s service (sense of experience) does not depend on the technical logic, but on the naming of function points.

Therefore, our client adopts the horizontal menu mode (horizontal TabBar mode), and the directory structure is completely defined by the program users. Moreover, any function points of the product can also have a custom name in the background. By shaping the user’s perception of the product through custom names, various operational scenarios are realized.

Every page, every operation function, can be enabled, disabled, hidden, named and so on. For example, the “Follow Posts” function can be named “Favorite” or “Save”, and “Posts I’m Following” can be named “Favorites”; The interface navigation can be made into the favorites of the user center; after completing such design, the user’s perception of this function is the “favorite” function, and the path cognition is the “favorites” of the user center.
