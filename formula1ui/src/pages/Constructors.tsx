import { Box, List, ListItem, Typography } from '@mui/material';
import { Constructor } from '../interfaces/Constructor';
import BaseListPage from './BaseListPage';

function Constructors() {
    return (
        <BaseListPage<Constructor>
            title="Constructors"
            route="/api/constructors"
            itemsName="constructors"
            renderList={(constructors) => (
                <List>
                    <ListItem sx={{ backgroundColor: "#e0e0e0", mb: 1, borderRadius: 1 }}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Name
                                </Typography>
                            </Box>
                            <Box flex={1}>
                                <Typography variant="h6" color="text.primary" fontWeight="bold">
                                    Id
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                    {constructors?.map((constructor) => (
                        <ListItem key={constructor.id} sx={{ backgroundColor: "#f5f5f5", mb: 1, borderRadius: 1 }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" px={2}>
                                <Box flex={1}>
                                    <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                        {constructor.name}
                                    </Typography>
                                </Box>
                                <Box flex={1}>
                                    <Typography variant="body1" color="primary">
                                        {constructor.id}
                                    </Typography>
                                </Box>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Constructors;
